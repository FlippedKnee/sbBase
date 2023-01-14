import React from 'react'
import ReactDOM from 'react-dom'

interface EditableProps {
  children: React.ReactNode
  content: TStoryblok
  key: string | number
}
interface TStoryblok {
  _uid: string
  _editable?: string
}

export class Editable extends React.PureComponent<EditableProps> {
  props: EditableProps
  constructor(props: EditableProps) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    this.addPropsOnChildren()
  }

  componentDidUpdate() {
    this.addPropsOnChildren()
  }

  addPropsOnChildren() {
    if (
      typeof this.props.content._editable === 'undefined' ||
      window?.location === window?.parent?.location
    ) {
      return
    }

    // eslint-disable-next-line react/no-find-dom-node
    const el = ReactDOM.findDOMNode(this) as Element
    const options = JSON.parse(
      this.props.content._editable
        .replace(/^<!--#storyblok#/, '')
        .replace(/-->$/, '')
    )

    if (el instanceof Object && typeof el.setAttribute === 'function') {
      el.setAttribute('data-blok-c', JSON.stringify(options))
      el.setAttribute('data-blok-uid', options.id + '-' + options.uid)

      this.addClass(el, 'storyblok__outline')
    } else {
      console.warn(
        'It seems that you are using a DOM text-node inside the SbEditable wrapper. Please wrap it with an HTML DOM element.',
        this.props.children
      )
    }
  }

  addClass(el: Element, className: string) {
    if (el.classList) {
      el.classList.add(className)
    } else if (!new RegExp('\\b' + className + '\\b').test(el.className)) {
      el.className += ' ' + className
    }
  }

  render() {
    return this.props.children
  }
}