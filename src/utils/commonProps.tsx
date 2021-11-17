type commonProps = {
  id?: string
  className?: string
  name?: string
  title?: string
  role?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

const commonPropsStoryArgs = {
  id: {
    name: 'id',
    type: { name: 'string' },
    defaultValue: 'sampleID',
    default: 'sampleID',
    control: {
      type: 'text'
    }
  },
  className: {
    name: 'className',
    type: { name: 'string' },
    defaultValue: 'sampleclassName',
    default: 'sampleclassName',
    control: {
      type: 'text'
    }
  },
  name: {
    name: 'name',
    type: { name: 'string' },
    defaultValue: 'name',
    default: 'name',
    control: {
      type: 'text'
    }
  },
  title: {
    name: 'title',
    type: { name: 'string' },
    defaultValue: 'title',
    default: 'title',
    control: {
      type: 'text'
    }
  },
  role: {
    name: 'role',
    type: { name: 'string' },
    control: {
      type: 'text'
    }
  },
  style: {
    name: 'style',
    defaultValue: {},
    default: {},
    control: { type: 'object' }
  }
}

export { commonProps, commonPropsStoryArgs }
