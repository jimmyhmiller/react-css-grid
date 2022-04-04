/// <reference types="react" />
import type { Property } from 'csstype';
declare type ContainerProps<ContainerType> = React.DetailedHTMLProps<React.HTMLAttributes<ContainerType>, ContainerType>;
export interface IndexableCSS extends React.CSSProperties {
    [key: string]: string | number | undefined;
}
declare type DisplayCSS = {
    inline?: boolean;
};
declare type GridTemplateColumnsCSS = {
    columns?: Property.GridTemplateColumns;
};
declare type GridTemplateRowsCSS = {
    rows?: Property.GridTemplateRows;
};
declare type GridTemplateAreasCSS = {
    areas?: Property.GridTemplateAreas;
};
declare type GridTemplateCSS = {
    template?: Property.GridTemplate;
};
declare type GridGapCSS = {
    gap?: Property.Gap;
    gridGap?: never;
} | {
    gap?: never;
    gridGap?: Property.Gap;
};
declare type GridColumnGapCSS = {
    columnGap?: Property.ColumnGap;
};
declare type GridRowGapCSS = {
    rowGap?: Property.RowGap;
};
declare type JustifyItemsCSS = {
    justifyItemsStart?: boolean;
    justifyItemsEnd?: boolean;
    justifyItemsCenter?: boolean;
    justifyItemsStretch?: boolean;
    justifyItems?: never;
} | {
    justifyItemsStart?: never;
    justifyItemsEnd?: never;
    justifyItemsCenter?: never;
    justifyItemsStretch?: never;
    justifyItems?: Property.JustifyItems;
};
declare type AlignItemsCSS = {
    alignItemsStart?: boolean;
    alignItemsEnd?: boolean;
    alignItemsCenter?: boolean;
    alignItemsStretch?: boolean;
    alignItems?: never;
} | {
    alignItemsStart?: never;
    alignItemsEnd?: never;
    alignItemsCenter?: never;
    alignItemsStretch?: never;
    alignItems?: Property.AlignItems;
};
declare type PlaceItemsCSS = {
    placeItems?: Property.PlaceItems;
};
declare type JustifyContentCSS = {
    justifyContentStart?: boolean;
    justifyContentEnd?: boolean;
    justifyContentCenter?: boolean;
    justifyContentStretch?: boolean;
    justifyContentSpaceAround?: boolean;
    justifyContentSpaceBetween?: boolean;
    justifyContentSpaceEvenly?: boolean;
    justifyContent?: never;
} | {
    justifyContentStart?: never;
    justifyContentEnd?: never;
    justifyContentCenter?: never;
    justifyContentStretch?: never;
    justifyContentSpaceAround?: never;
    justifyContentSpaceBetween?: never;
    justifyContentSpaceEvenly?: never;
    justifyContent?: Property.JustifyContent;
};
declare type AlignContentCSS = {
    alignContentStart?: boolean;
    alignContentEnd?: boolean;
    alignContentCenter?: boolean;
    alignContentStretch?: boolean;
    alignContentSpaceAround?: boolean;
    alignContentSpaceBetween?: boolean;
    alignContentSpaceEvenly?: boolean;
    alignContent?: never;
} | {
    alignContentStart?: never;
    alignContentEnd?: never;
    alignContentCenter?: never;
    alignContentStretch?: never;
    alignContentSpaceAround?: never;
    alignContentSpaceBetween?: never;
    alignContentSpaceEvenly?: never;
    alignContent?: Property.AlignContent;
};
declare type PlaceContentCSS = {
    placeContent?: Property.PlaceContent;
};
declare type GridAutoFlowCSS = {
    autoFlowRow?: boolean;
    autoFlowColumn?: boolean;
    autoFlowDense?: boolean;
    autoFlow?: never;
} | {
    autoFlowRow?: never;
    autoFlowColumn?: never;
    autoFlowDense?: never;
    autoFlow?: Property.GridAutoFlow;
};
declare type GridAutoRowsCSS = {
    autoRows?: Property.GridAutoRows;
};
declare type GridAutoColumnsCSS = {
    autoColumns?: Property.GridAutoColumns;
};
declare type GridColumnStartCSS = {
    columnStart?: Property.GridColumnStart;
};
declare type GridColumnEndCSS = {
    columnEnd?: Property.GridColumnEnd;
};
declare type GridRowStartCSS = {
    rowStart?: Property.GridRowStart;
};
declare type GridRowEndCSS = {
    rowEnd?: Property.GridRowEnd;
};
declare type GridRowCSS = {
    row?: Property.GridRow;
};
declare type GridColumnCSS = {
    column?: Property.GridColumn;
};
declare type GridAreaCSS = {
    area?: Property.GridArea;
};
declare type JustifySelfCSS = {
    justifySelfStart?: boolean;
    justifySelfEnd?: boolean;
    justifySelfCenter?: boolean;
    justifySelfStretch?: boolean;
    justifySelf?: never;
} | {
    justifySelfStart?: never;
    justifySelfEnd?: never;
    justifySelfCenter?: never;
    justifySelfStretch?: never;
    justifySelf?: Property.JustifySelf;
};
declare type AlignSelfCSS = {
    alignSelfStart?: boolean;
    alignSelfEnd?: boolean;
    alignSelfCenter?: boolean;
    alignSelfStretch?: boolean;
    alignSelf?: never;
} | {
    alignSelfStart?: never;
    alignSelfEnd?: never;
    alignSelfCenter?: never;
    alignSelfStretch?: never;
    alignSelf?: Property.AlignSelf;
};
declare type PlaceSelfCSS = {
    placeSelf?: Property.PlaceSelf;
};
export declare type ContainerTags = Pick<JSX.IntrinsicElements, 'div' | 'nav' | 'main' | 'aside' | 'article' | 'header' | 'section' | 'footer'>;
declare type TagName = {
    as?: keyof ContainerTags;
};
export declare type GridContainerProps<ContainerType = HTMLDivElement> = ContainerProps<ContainerType> & DisplayCSS & GridTemplateColumnsCSS & GridTemplateRowsCSS & GridTemplateAreasCSS & GridTemplateCSS & GridGapCSS & GridColumnGapCSS & GridRowGapCSS & JustifyItemsCSS & AlignItemsCSS & PlaceItemsCSS & JustifyContentCSS & AlignContentCSS & PlaceContentCSS & GridAutoFlowCSS & GridAutoRowsCSS & GridAutoColumnsCSS & TagName;
export declare type GridItemProps<ContainerType = HTMLDivElement> = ContainerProps<ContainerType> & GridColumnStartCSS & GridColumnEndCSS & GridRowStartCSS & GridRowEndCSS & GridRowCSS & GridColumnCSS & GridAreaCSS & JustifySelfCSS & AlignSelfCSS & PlaceSelfCSS & TagName;
export {};
