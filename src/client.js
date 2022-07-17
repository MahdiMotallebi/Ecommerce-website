import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "0k2i2301",
  dataset: "production",
  useCdn: false,
});
