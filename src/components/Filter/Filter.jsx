import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({ name, changeInput }) {
  return (
    <label className={css.name}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
         name="filter"
       value={name}
        onChange={changeInput}
      />
    </label>
  );
}

Filter.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
