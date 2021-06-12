const $axios = {
  $get: jest.fn((data) => Promise.resolve({ ...data })),
}

global.$axios = $axios
