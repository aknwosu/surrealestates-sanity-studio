import {callToAction} from './objects/callToAction'
import {seo} from './objects/seo'
import {faq} from './documents/faq'
import {project} from './documents/project'
import {service} from './documents/service'
import {serviceArea} from './documents/serviceArea'
import {siteSettings} from './documents/siteSettings'
import {testimonial} from './documents/testimonial'

export const schemaTypes = [
  service,
  serviceArea,
  project,
  testimonial,
  faq,
  siteSettings,
  seo,
  callToAction,
]
