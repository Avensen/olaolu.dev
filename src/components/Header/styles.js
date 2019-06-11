import styled from 'vue-styled-components'
import { toPx } from '@mrolaolu/helpers'
import { createMenuShadow } from '@/helpers'

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  z-index: 1000;
  position: fixed;
  align-items: center;
  background: transparent;
  justify-content: space-between;
  padding: 0 ${props => props.theme.header.padding};
  height: ${props => toPx(props.theme.header.height)};

  &[data-compact='true'] {
    #logo {
      width: unset;

      svg {
        transform: translateX(-56px);
      }

      .logo_svg__lu,
      .logo_svg__ola {
        opacity: 0;
        pointer-events: none;
      }

      .logo_svg__ola {
        transform: translateX(50%);
        transform-origin: left;
      }

      .logo_svg__lu {
        transform: translateX(-50%);
      }
    }
  }

  &[data-compact='false'] {
    .logo_svg__lu,
    .logo_svg__ola {
      transition: opacity 0.5s, transform 0.5s 200ms ease-out;
    }
  }

  #logo {
    height: 46px;
    width: 8.34vw;
    display: flex;
    position: relative;
    flex-direction: column;
    outline-color: transparent;

    svg {
      width: inherit;
      height: inherit;
    }

    .logo_svg__lu,
    .logo_svg__ola {
      opacity: 1;
      transform: translate(0);
    }
  }

  #contact__menu {
    top: 20px;
    right: 49px;
    z-index: 998;
    display: flex;
    padding: 50px;
    width: 22.223vw;
    box-shadow: none;
    min-width: 320px;
    user-select: none;
    font-size: 1.06em;
    position: absolute;
    flex-direction: column;
    background-color: #ffffff;
    transition: opacity 0.2s, box-shadow 0.6s 200ms;

    &:not([aria-expanded='true']) {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    &[aria-expanded='true'] {
      box-shadow: ${createMenuShadow()};

      .title,
      .basic__contact,
      .social__contact {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .title {
      opacity: 0;
      color: #cbc9e2;
      transition: 0.2s;
      font-size: 1.06em;
      letter-spacing: 0.25em;
      transition-delay: 100ms;
      text-transform: uppercase;
    }

    a {
      color: ${props => props.theme.colors['electric-blue']};

      &:focus {
        outline-color: transparent;
      }
    }
  }

  .basic__contact,
  .social__contact {
    opacity: 0;
    transition: opacity, transform 0.2s;
  }

  .basic__contact {
    line-height: 2.5;
    font-size: 1.2em;
    margin: 30px 0 40px;
    transition-delay: 100ms;
    transform: translateY(30px);
  }

  .social__contact {
    display: flex;
    margin-top: auto;
    transition-delay: 300ms;
    transform: translateY(20px);
    justify-content: space-between;

    li {
      display: inline-block;
    }
  }

  .menu__toggle {
    width: 40px;
    height: 30px;
    z-index: 999;
    background: none;
    margin-top: 10px;
    position: relative;
    display: inline-flex;
    color: ${props => props.theme.colors['electric-blue']};

    &:focus {
      outline-offset: 4px;
      outline-color: transparent;
    }

    &.x {
      width: 30px;

      &:before {
        transform: rotate(45deg);
      }

      &:after {
        top: 0;
        width: 100%;
        transform: rotate(-45deg);
      }
    }

    &:before,
    &:after {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      transition: 0.2s ease;
      transform: rotate(0deg);
      background-color: currentColor;
    }

    &:before {
      top: 0;
    }

    &:after {
      right: 0;
      top: 16px;
      width: 72%;
    }
  }
`

export default {
  ...StyledHeader,
  name: 'StyledHeader',
}
