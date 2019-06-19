import * as React from 'react'
import classNames from 'classnames'
import omit from 'lodash.omit'

const BLACK_LIST = [
  'prefixCls',
  'className',
  'style',
  'href',
  'target',
  'htmlType',
  'className',
  'disabled',
  'onClick',
]

export interface IButtonProps {
  prefixCls?: string
  className?: string
  style?: object
  href?: string
  target?: string
  disabled?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler<Element>
}

export default class Button extends React.Component<IButtonProps> {
  static defaultProps = {
    prefixCls: 'zero-button',
    className: '',
    style: {},
    disabled: false,
  }

  wrapValueBySpan(children: React.ReactNode): React.ReactNode {
    if (children == null) {
      return null
    }

    return React.Children.map(children, child => {
      if (typeof child === 'string') {
        return <span>{child}</span>
      }

      return child
    })
  }

  renderLink(classes: string, children: React.ReactNode) {
    const { disabled, href = '', target } = this.props
    const nodeProps: any = omit(this.props, BLACK_LIST)

    return (
      <a
        {...(disabled ? {} : { href, target })}
        {...nodeProps}
        className={classes}
        onClick={this.handleClick}
      >
        {children}
      </a>
    )
  }

  renderButton(classes: string, children: React.ReactNode) {
    const { disabled, htmlType } = this.props
    const nodeProps: any = omit(this.props, BLACK_LIST)

    return (
      <button
        {...nodeProps}
        {...(htmlType ? { type: htmlType } : {})}
        className={classes}
        disabled={disabled}
        onClick={this.handleClick}
      >
        {children}
      </button>
    )
  }

  handleClick: React.MouseEventHandler = e => {
    const { disabled, onClick } = this.props

    if (!disabled) {
      onClick && onClick(e)
    }
  }

  render() {
    const { disabled, children, prefixCls, className, href } = this.props
    const renderName: string = href ? 'renderLink' : 'renderButton'
    const classes: string = classNames(prefixCls, className, {
      [`${prefixCls}-disabled`]: disabled,
    })

    return this[renderName](classes, this.wrapValueBySpan(children))
  }
}
