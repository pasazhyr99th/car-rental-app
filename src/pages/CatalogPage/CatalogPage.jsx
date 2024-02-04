import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, BtnLoadMore } from './CatalogPage.styled';
import CatalogList from '../../components/CatalogList';
import Filter from '../../components/Filter';
import { fetchAdvertsAsync } from '../../redux/operations';
import { loadMore } from '../../redux/advertsSlice';
import {
  selectAdverts,
  selectMakeFilter,
  selectPage,
  selectHasMore,
} from '../../redux/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adverts = useSelector(selectAdverts);
  const makeFilter = useSelector(selectMakeFilter);
  const page = useSelector(selectPage);
  const hasMore = useSelector(selectHasMore);

  useEffect(() => {
    dispatch(fetchAdvertsAsync());
  }, [dispatch, makeFilter, page]);

  const handleLoadMore = useCallback(() => {
    if (hasMore) {
      dispatch(loadMore());
      dispatch(fetchAdvertsAsync({ makeFilter }));
    }
  }, [dispatch, hasMore, makeFilter]);

  const handleFilterChange = useCallback(
    (make) => {
      navigate(`/catalog?make=${make}`);
    },
    [navigate]
  );

  return (
    <Container>
      <Filter onFilterChange={handleFilterChange} />
      <CatalogList adverts={adverts} />
      {hasMore && <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>}
    </Container>
  );
};

export default CatalogPage;
