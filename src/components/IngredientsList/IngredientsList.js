import React from 'react';
import { Button } from '@smooth-ui/core-sc';
import PropTypes from 'prop-types';

import withRowContent from '../../hocs/RowContent';
import List from './IngredientsList.style';

const IngredientsList = ({ ingredientsList, onClick }) => (
  <List
    visible={ingredientsList.length > 0}
  >
    {ingredientsList.map(item => (
      <li
        key={item.id}
        data-key={item.id}
      >
        <span>
          {item.value}
        </span>
        <Button
          aria-label={`Remove ${item.value} from list`}
          p="5px"
          display="inline-block"
          backgroundColor="transparent"
          color="black"
          type="button"
          onClick={onClick}
        >
        &#10006;
        </Button>
      </li>
    ))}
  </List>
);

IngredientsList.propTypes = {
  ingredientsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};

const rowContentSetup = {
  rowConfig: {},
  colConfig: {},
  boxConfig: {
    as: 'section',
    role: 'region',
    mx: 'auto',
    maxWidth: '400px',
  },
};

const WrappedIngredientsList = withRowContent(rowContentSetup)(IngredientsList);

export default WrappedIngredientsList;
