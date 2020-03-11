import * as React from 'react'
import classNames from 'classnames'
import omit from 'lodash.omit'

const BLACK_LIST = [
  'prefixCls',
  'className',
  'type',
  'size',
  'outline',
  'loading',
  'block',
  'href',
  'target',
  'htmlType',
  'disabled',
  'onClick',
]

export interface IButtonProps {
  prefixCls?: string
  className?: string
  style?: React.CSSProperties
  type?: 'default' | 'primary' | 'danger' | 'success'
  size?: 'medium' | 'large' | 'small'
  outline?: boolean
  loading?: boolean
  block?: boolean
  href?: string
  target?: string
  disabled?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler<Element>
}

export default class Button extends React.Component<IButtonProps> {
  static defaultProps = {
    prefixCls: 'z2o-button',
    className: '',
    type: 'default',
    size: 'medium',
    disabled: false,
    loading: false,
    htmlType: 'button',
    outline: false,
    block: false,
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
    const { disabled, htmlType, loading } = this.props
    const nodeProps: any = omit(this.props, BLACK_LIST)

    return (
      <button
        {...nodeProps}
        {...(htmlType ? { type: htmlType } : {})}
        className={classes}
        disabled={disabled || loading}
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
    const {
      className,
      disabled,
      children,
      prefixCls,
      href,
      type,
      size,
      outline,
      block,
      loading,
    } = this.props
    const renderName: string = href ? 'renderLink' : 'renderButton'
    const classes: string = classNames(prefixCls, className, {
      [`${prefixCls}--disabled`]: disabled,
      [`${prefixCls}--${type}${outline ? '__outline' : ''}`]: type !== 'default',
      [`${prefixCls}--${size}`]: size !== 'medium',
      [`${prefixCls}--block`]: block,
      [`${prefixCls}--loading`]: loading,
    })

    return this[renderName](classes, this.wrapValueBySpan(children))
  }
}
