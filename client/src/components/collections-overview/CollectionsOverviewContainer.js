import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionIsFetching } from '../../redux/selectors/shopSelectors';

import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';

const mapStateToProps = createStructuredSelector({
   isLoading: selectCollectionIsFetching
});

const CollectionsOverviewContainer = compose(
   connect(mapStateToProps),
   WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
