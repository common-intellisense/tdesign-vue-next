import { getComponentsMap, getPropsMap } from './mapping'
// import directives from '../directives.json'

export function tdesignVueNext1() {
  return {
    uiName: 'tdesign-vue-next',
    lib: 'tdesign-vue-next',
    map: getPropsMap(),
  }
}

export function tdesignVueNext1Components() {
  return {
    map: getComponentsMap(),
    isSeperatorByHyphen: true,
    prefix: 't',
    isReact: false,
    lib: 'tdesign-vue-next',
    // directives: directives.tdesignMobileVue1,
  }
}
