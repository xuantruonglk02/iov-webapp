import i18n from '.'

export const translateYupError = (
    yupError:
        | {
              i18nKey: string
              params?: Record<string, string>
          }
        | string,
) => {
    if (typeof yupError === 'string') {
        return i18n.global.t(yupError)
    }
    if (!yupError?.i18nKey) return ''
    return i18n.global.t(yupError?.i18nKey, { ...yupError?.params })
}
