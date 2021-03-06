import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/selectors/shopSelectors';

import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CollectionPage from './CollectionPage';

const mapStateToProps = createStructuredSelector({
   isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionsPageContainer = compose(
   connect(mapStateToProps),
   WithSpinner
)(CollectionPage);

export default CollectionsPageContainer;
