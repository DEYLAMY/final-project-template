export { default as Card } from '../..\\components\\Card.vue'
export { default as CardEvent } from '../..\\components\\CardEvent.vue'
export { default as CardItineraries } from '../..\\components\\CardItineraries.vue'
export { default as CardService } from '../..\\components\\CardService.vue'
export { default as CarouselSm } from '../..\\components\\CarouselSm.vue'
export { default as ItinCard } from '../..\\components\\itinCard.vue'
export { default as ListMapToggler } from '../..\\components\\listMapToggler.vue'
export { default as ListOfServices } from '../..\\components\\listOfServices.vue'
export { default as PoiCard } from '../..\\components\\poiCard.vue'
export { default as PoiItineraryCard } from '../..\\components\\PoiItineraryCard.vue'
export { default as PointOfInterest } from '../..\\components\\pointOfInterest.vue'
export { default as TheHeader } from '../..\\components\\TheHeader.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
