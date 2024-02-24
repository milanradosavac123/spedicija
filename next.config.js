module.exports = {
  images: {
    domains: ['www.learningcontainer.com'], // Add the domains from which images will be loaded
    deviceSizes: [320, 420, 768, 1024, 1200], // Add the device sizes you want to optimize for
    loader: 'default', // Use the default image loader
    path: '/_next/image', // Set the default path for the image loader
  },
};