module.exports = {
  async onPreBuild({ inputs, utils }) {
    const cacheDir = inputs.cacheDir;
    const files = await utils.cache.list();
    console.log("Cached files", files);
    await utils.cache.restore(cacheDir);
  },
  async onPostBuild({ inputs, utils }) {
    const cacheDir = inputs.cacheDir;
    await utils.cache.save(cacheDir);
  },
};
