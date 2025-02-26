import { printValue } from 'yup'

const mixed = {
    default: (params: any) => {
        return { i18nKey: 'yup.mixed.default', params: { path: params.path } }
    },
    required: (params: any) => {
        return {
            i18nKey: 'yup.mixed.required',
            params,
        }
    },
    selectRequired: (params: any) => {
        return {
            i18nKey: 'yup.mixed.selectRequired',
            params,
        }
    },
    oneOf: (params: any) => {
        return {
            i18nKey: 'yup.mixed.oneOf',
            params: {
                path: params.path,
                values: params.values,
            },
        }
    },
    notOneOf: (params: any) => {
        return {
            i18nKey: 'yup.mixed.notOneOf',
            params: { path: params.path, values: params.values },
        }
    },
    notType: ({ path, type, value, originalValue }: any) => {
        const isCast = originalValue != null && originalValue !== value
        let msg =
            `${path} must be a \`${type}\` type, ` +
            `but the final value was: \`${printValue(value, true)}\`` +
            (isCast ? ` (cast from the value \`${printValue(originalValue, true)}\`).` : '.')

        if (value === null) {
            msg += `\n If "null" is intended as an empty value be sure to mark the schema as \`.nullable()\``
        }

        return msg
    },
    defined: (params: any) => {
        return {
            i18nKey: 'yup.mixed.defined',
            params: { path: params.path },
        }
    },
}

const string = {
    length: (params: any) => {
        return {
            i18nKey: 'yup.string.length',
            params: { length: params.length, path: params.path },
        }
    },
    min: (params: any) => {
        return {
            i18nKey: 'yup.string.min',
            params: { path: params.path, length: params.min },
        }
    },
    max: (params: any) => {
        return {
            i18nKey: 'yup.string.max',
            params: { path: params.path, length: params.max },
        }
    },
    matches: (params: any) => {
        return {
            i18nKey: 'yup.string.matches',
            params: { path: params.path, regex: params.regex },
        }
    },
    email: (params: any) => {
        return {
            i18nKey: 'yup.string.email',
            params: { path: params.path },
        }
    },
    url: (params: any) => {
        return {
            i18nKey: 'yup.string.url',
            params: { path: params.path },
        }
    },
    uuid: (params: any) => {
        return {
            i18nKey: 'yup.string.uuid',
            params: { path: params.path },
        }
    },
    trim: (params: any) => {
        return {
            i18nKey: 'yup.string.trim',
            params: { path: params.path },
        }
    },
    lowercase: (params: any) => {
        return {
            i18nKey: 'yup.string.lowercase',
            params: { path: params.path },
        }
    },
    uppercase: (params: any) => {
        return {
            i18nKey: 'yup.string.uppercase',
            params: { path: params.path },
        }
    },
}

const number = {
    min: (params: any) => ({
        i18nKey: 'yup.number.min',
        params,
    }),
    max: (params: any) => {
        return {
            i18nKey: 'yup.number.max',
            params: { path: params.path, max: params.max },
        }
    },
    lessThan: (params: any) => {
        return {
            i18nKey: 'yup.number.less',
            params: { path: params.path, less: params.less },
        }
    },
    moreThan: (params: any) => {
        return {
            i18nKey: 'yup.number.more',
            params: { path: params.path, more: params.more },
        }
    },
    positive: (params: any) => {
        return {
            i18nKey: 'yup.number.positive',
            params: { path: params.path },
        }
    },
    negative: (params: any) => {
        return {
            i18nKey: 'yup.number.negative',
            params: { path: params.path },
        }
    },
    integer: (params: any) => {
        return {
            i18nKey: 'yup.number.integer',
            params: { path: params.path },
        }
    },
}

const date = {
    min: (params: any) => {
        return {
            i18nKey: 'yup.date.min',
            params: { path: params.path, min: params.min },
        }
    },
    max: (params: any) => {
        return {
            i18nKey: 'yup.date.max',
            params: { path: params.path, max: params.max },
        }
    },
}

const boolean = {
    isValue: (params: any) => {
        return {
            i18nKey: 'yup.boolean.isValue',
            params: { path: params.path, max: params.value },
        }
    },
}

const object = {
    noUnknown: (params: any) => {
        return {
            i18nKey: 'yup.object.noUnknown',
            params: {
                path: params.path,
                unknown: params.value,
            },
        }
    },
}

const array = {
    min: (params: any) => {
        return {
            i18nKey: 'yup.array.min',
            params: { path: params.path, min: params.min },
        }
    },
    max: (params: any) => {
        return {
            i18nKey: 'yup.array.max',
            params: { path: params.path, max: params.max },
        }
    },
    length: (params: any) => {
        return {
            i18nKey: 'yup.array.length',
            params: { path: params.path, length: params.length },
        }
    },
}

export default {
    mixed,
    string,
    number,
    date,
    object,
    array,
    boolean,
}
