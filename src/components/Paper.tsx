import * as React from 'react';
import { graphql } from 'gatsby';
import SectionTitle from '~/src/components/SectionTitle';
import { FieldError } from '~/src/utils';

type PaperProp = {
  data: GatsbyTypes.PaperDataFragment;
};

const Paper: React.FC<PaperProp> = ({ data }) => {
  const { title, data: paperData } = data;
  if (!title) {
    throw new FieldError({ componentName: 'Paper', field: 'title' });
  }
  return paperData.length > 0 ? (
    <div>
      <SectionTitle title={title} />
      <ul>
        {paperData.map((paperValue, valueIdx) => (
          <li key={`paper-value-${valueIdx}`}>
            <h3>{paperValue?.title}</h3>
            {paperValue?.description.map((descriptionValue, desciptionIdx) => (
              <p key={`paper-value-description-${desciptionIdx}`}>{descriptionValue}</p>
            ))}
            {paperValue?.link && (
              <a href={paperValue.link}>LINK</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default Paper;

export const query = graphql`
  fragment PaperData on Paper {
    title
    data {
      title
      description
      link
    }
  }
`;
