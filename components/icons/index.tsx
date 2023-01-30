import NextJS from './nextjs.svg'

const components = {
  nextJS: NextJS,
}

const Icon = ({ kind, h = 8, w = 8 }) => {
  const SocialSvg = components[kind]

  return <SocialSvg className={`h-${h} w-${w}`} />
}

export default Icon
