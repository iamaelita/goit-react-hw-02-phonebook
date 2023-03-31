import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({ filter, onChange }) {
  return (
    <label className={css.name}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
         name="filter"
       value={filter}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
