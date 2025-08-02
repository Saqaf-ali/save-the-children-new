import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import MainSection from './MainSection.vue';
import FigurePrimary from './FigurePrimary.vue';

// Mocking localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(key) {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('MainSection.vue', () => {
  const mockHomePageData = {
    heroImgs: [
      { id: 1, src: '../assets/images/articles/img1.webp', alt: 'children are happy', description: 'Lorem ipsum dolor sit amet' },
      { id: 2, src: '../assets/images/articles/img2.webp', alt: 'children are happy', description: 'Lorem ipsum dolor sit ametipsum dolor sit amet' },
    ],
  };

  beforeEach(() => {
    // Reset localStorage and set mock data before each test
    window.localStorage.clear();
    window.localStorage.setItem('homePage', JSON.stringify(mockHomePageData));
  });

  it('renders the main title correctly', () => {
    const wrapper = mount(MainSection);
    const title = wrapper.find('h1.heroTitle');
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe('Yemen Save the Children');
  });

  it('loads data from localStorage and renders the correct number of FigurePrimary components', () => {
    const wrapper = mount(MainSection);
    const figures = wrapper.findAllComponents(FigurePrimary);
    expect(figures.length).toBe(mockHomePageData.heroImgs.length);
  });

  it('passes the correct src and alt props to each FigurePrimary component', () => {
    const wrapper = mount(MainSection);
    const figures = wrapper.findAllComponents(FigurePrimary);

    figures.forEach((figureWrapper, index) => {
      const expectedProps = mockHomePageData.heroImgs[index];
      expect(figureWrapper.props('src')).toBe(expectedProps.src);
      expect(figureWrapper.props('alt')).toBe(expectedProps.alt);
    });
  });

  it('passes undefined for the figcaption prop due to a mismatch between data property and prop name', () => {
    const wrapper = mount(MainSection);
    const figures = wrapper.findAllComponents(FigurePrimary);

    // This test highlights a potential bug. The component's data has a 'description' field,
    // but the template tries to bind to 'img.figcaption', which is undefined.
    figures.forEach(figureWrapper => {
      expect(figureWrapper.props('figcaption')).toBe(undefined);
    });
  });

  it('should not render any figures if localStorage is empty or data is invalid', () => {
    // Clear localStorage to simulate it being empty
    window.localStorage.clear();
    
    // Suppress console.error from Vue for this test since we expect a failure
    const spy = vi.spyOn(console, 'error');
    spy.mockImplementation(() => {});

    const wrapper = mount(MainSection);
    
    // The component currently breaks if homePage is null. A robust component would handle this.
    // This test checks that no figures are rendered in this case.
    const figures = wrapper.findAllComponents(FigurePrimary);
    expect(figures.length).toBe(0);

    spy.mockRestore();
  });
});
