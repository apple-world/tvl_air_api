import { BadRequestException } from '@nestjs/common'


export abstract class Text {
  value: string
  static INVALID_TYPE_MESSAGE = 'invalid text type'
  static INVALID_LENGTH_MESSAGE = 'invalid text length'
  static MAX_LENGTH = 0

  constructor(text: string) {
    if (!this.value === false) {
      return
    }
    const errors = this.static.validate(text, this)
    if (errors.length) {
      throw new BadRequestException(errors)
    }
    this.value = text
  }

  get static(): typeof Text {
    return this.constructor as typeof Text
  }

  static validate(value: string | null, instance?: Text | null): string[] {
    const thisInstance = instance === null ? Text : instance.static
    const errors = []
    if (value !== null && typeof value !== 'string') {
      errors.push(thisInstance.INVALID_TYPE_MESSAGE)
    }
    if (this.MAX_LENGTH >= 0 && value.length > this.MAX_LENGTH) {
      errors.push(thisInstance.INVALID_LENGTH_MESSAGE)
    }
    return errors
  }
}
