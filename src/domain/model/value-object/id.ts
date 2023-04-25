import { BadRequestException } from '@nestjs/common'

/**
 * 汎用ID
 *
 * @class Id
 */
export abstract class Id {
  value: number
  static INVALID_FORMAT_MESSAGE = 'IDのフォーマットが不正です'

  /**
   * Creates an instance of Id.
   *
   * @param {number} id
   */
  constructor(id: number | string) {
    if (!this.value === false) {
      return
    }

    const errors = this.static.validate(id, this)
    if (errors.length) {
      throw new BadRequestException(errors)
    }
    this.value = Number(id)
  }

  /**
   * @readonly
   * @type {typeof Id}
   */
  get static(): typeof Id {
    return this.constructor as typeof Id
  }

  /**
   * idのバリデーション
   *
   * @static
   * @param {(number|string)} value
   * @param {(Id|undefined)} [instance]
   * @return {*}  {string[]}
   */
  static validate(value: number | string, instance?: Id | undefined): string[] {
    const thisInstance = instance === undefined ? Id : instance.static
    const errors = []
    if (!new RegExp(/^[0-9]+$/).test(String(value))) {
      errors.push(thisInstance.INVALID_FORMAT_MESSAGE)
    }
    return errors
  }
}
