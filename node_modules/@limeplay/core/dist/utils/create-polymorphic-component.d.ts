import React__default from 'react';

type ExtendedProps<Props = {}, OverrideProps = {}> = OverrideProps & Omit<Props, keyof OverrideProps>;
type ElementType = keyof JSX.IntrinsicElements | React__default.JSXElementConstructor<any>;
type PropsOf<C extends ElementType> = JSX.LibraryManagedAttributes<C, React__default.ComponentPropsWithoutRef<C>>;
type ComponentProp<C> = {
    component?: C;
};
type InheritedProps<C extends ElementType, Props = {}> = ExtendedProps<PropsOf<C>, Props>;
type PolymorphicRef<C> = C extends React__default.ElementType ? React__default.ComponentPropsWithRef<C>['ref'] : never;
type PolymorphicComponentProps<C, Props = {}> = C extends React__default.ElementType ? InheritedProps<C, Props & ComponentProp<C>> & {
    ref?: PolymorphicRef<C>;
} : Props & {
    component: React__default.ElementType;
};
declare function createPolymorphicComponent<ComponentDefaultType, Props, StaticComponents = Record<string, never>>(component: any): (<C = ComponentDefaultType>(props: PolymorphicComponentProps<C, Props>) => React__default.ReactElement) & Omit<React__default.FunctionComponent<(Props & ComponentProp<any> & Omit<Omit<any, "ref">, "component" | keyof Props> & {
    ref?: any;
}) | (Props & {
    component: React__default.ElementType<any>;
})>, never> & StaticComponents;

export { PolymorphicComponentProps, PolymorphicRef, createPolymorphicComponent };
