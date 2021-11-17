import slugify from "slugify"

const slugText = (text) => {
  return slugify(text, {
    replacement: '-',
    lower: true
  })
}

export { slugText }