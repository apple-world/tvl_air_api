import { BadRequestException } from '@nestjs/common'

/**
 * 汎用名称
 *
 * @abstract
 * @class Name
 */
export abstract class Name {
  value: string
  static INVALID_TYPE_MESSAGE = '型が不正です'
  static INVALID_LENGTH_MESSAGE = '長さが不正です'
  static MAX_LENGTH = 0

  /**
   * Creates an instance of Name.
   *
   * @param {string} name
   */
  constructor(name: string) {
    if (!this.value === false) {
      return
    }
    const errors = this.static.validate(name, this)
    if (errors.length) {
      throw new BadRequestException(errors)
    }
    this.value = name
  }

  /**
   * @readonly
   * @type {typeof Name}
   */
  get static(): typeof Name {
    return this.constructor as typeof Name
  }

  /**
   * バリデーション
   *
   * @static
   * @param {(string|null)} value
   * @param {(Name|null)} [instance]
   * @return {*}  {string[]}
   */
  static validate(value: string | null, instance?: Name | null): string[] {
    const thisInstance = instance === null ? Name : instance.static
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
