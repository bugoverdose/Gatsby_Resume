import * as React from 'react';
import { graphql } from 'gatsby';

type SkillProps = {
  data: GatsbyTypes.SkillDataFragment;
};

const Skill: React.FC<SkillProps> = ({
  data,
}) => {
  return (
    <div>
      <h2>{data.title && data.title}</h2>
      {data.criteria && (
        <ul>
          {data.criteria.map((criteriaValue, criteriaIdx) => (
            <li key={`skill-criteria-${criteriaIdx}`}>{criteriaValue}</li>
          ))}
        </ul>
      )}
      {data.category && (
        <ul>
          {data.category.map((categoryValue, categoryIdx) => (
            <li key={`skill-category-${categoryIdx}`}>
              <h3>{categoryValue?.category}</h3>
              {categoryValue?.data.map((skillData, skillDataIdx) => (
                <span key={`skill-${categoryValue}-${skillDataIdx}`}>
                  {skillData?.name} - {skillData?.level}
                </span>
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Skill;

export const query = graphql`
  fragment SkillData on Skill {
    title
    criteria
    category {
      category
      data {
        name
        level
      }
    }
  }
`;