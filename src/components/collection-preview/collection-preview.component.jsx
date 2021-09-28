import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from "./collection-preview.styles";

const CollectionPreview = ({title,items}) => (
    <CollectionPreviewContainer>
        <TitleContainer className="title">{title.toUpperCase()}</TitleContainer>
        <PreviewContainer className="preview">
            {
                items.filter((item, idc) => idc < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default CollectionPreview;