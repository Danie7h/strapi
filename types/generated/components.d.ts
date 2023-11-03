import type { Schema, Attribute } from "@strapi/strapi";

export interface ContentHeader extends Schema.Component {
  collectionName: "components_content_headers";
  info: {
    displayName: "header";
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface CvResponsibilities extends Schema.Component {
  collectionName: "components_cv_responsibilities";
  info: {
    displayName: "responsibilities";
  };
  attributes: {
    description: Attribute.String;
  };
}

export interface LinsSocial extends Schema.Component {
  collectionName: "components_lins_socials";
  info: {
    displayName: "social";
    description: "";
  };
  attributes: {
    email: Attribute.Email;
    github: Attribute.String;
    linkedin: Attribute.String;
    gitlab: Attribute.String;
    whatsapp: Attribute.String;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "content.header": ContentHeader;
      "cv.responsibilities": CvResponsibilities;
      "lins.social": LinsSocial;
    }
  }
}
