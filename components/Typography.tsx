import { TextProps } from 'react-native';
import { UITextView } from 'react-native-uitextview';
import { web } from '@/app/platform/detection';
import { atoms } from '@/app/util/atoms';
import { flatten } from '@/app/util/flatten';

export interface Typography {}
/**
 * Our main text component. Use this most of the time.
 */
export function Text({
                         children,
                         style,
                         selectable,
                         ...rest
                     }: TextProps) {


    const shared = {
        uiTextView: true,
        selectable,
        style: style,
        dataSet: Object.assign(  {}),
        ...rest,
    }

    return (
        <UITextView {...shared}>
            {children}
        </UITextView>
    )
}

export function createHeadingElement({level}: {level: number}) {
    return function HeadingElement({style, ...rest}: TextProps) {
        const attr =
            web({
                role: 'heading',
                'aria-level': level,
            }) || {}
        return <Text {...attr} {...rest} style={style} />
    }
}

/*
 * Use semantic components when it's beneficial to the user or to a web scraper
 */
export const H1 = createHeadingElement({level: 1})
export const H2 = createHeadingElement({level: 2})
export const H3 = createHeadingElement({level: 3})
export const H4 = createHeadingElement({level: 4})
export const H5 = createHeadingElement({level: 5})
export const H6 = createHeadingElement({level: 6})
export function P({style, ...rest}: TextProps) {
    const attr =
        web({
            role: 'paragraph',
        }) || {}
    return (
        <Text
            {...attr}
            {...rest}
            style={[atoms.text_md, atoms.leading_normal, flatten(style)]}
        />
    )
}
