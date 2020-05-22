module.exports = {
  async onPreBuild({ inputs, constants, utils }) {
    const cacheDir = constants.PUBLISH_DIR + inputs.cacheDir;
    console.log(`Caching ${cacheDir}`);
    const files = await utils.cache.list();
    console.log("Cached files", files);
    await utils.cache.restore(cacheDir);
  },
  async onPostBuild({ inputs, constants, utils }) {
    const cacheDir = constants.PUBLISH_DIR + inputs.cacheDir;
    console.log(`Trying to get ${cacheDir}`);
    await utils.cache.save(cacheDir);
  },
};
