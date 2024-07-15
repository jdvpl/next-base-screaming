import "@testing-library/jest-dom/extend-expect"

jest.mock("next/router", () => require("next-router-mock"))

// Guarda la referencia original de structuredClone
const originalStructuredClone = global.structuredClone

afterAll(() => {
  global.structuredClone = originalStructuredClone
})

