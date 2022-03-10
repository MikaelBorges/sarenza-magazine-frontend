import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { LinkButton } from '../Links';
import styles from './Pagination.module.scss';
import router from 'next/router';
const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

class Pagination extends Component {
  constructor(props) {
    super(props);
    const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props;

    this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 30;
    this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;

    // pageNeighbours can be: 0, 1 or 2
    this.pageNeighbours =
      typeof pageNeighbours === 'number' ? Math.max(0, Math.min(pageNeighbours, 2)) : 0;

    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

    this.state = { currentPage: 1 };
  }

  componentDidMount() {
    const { query } = router;
    const page = query.page || 1;
    const { onPageChanged = (f) => f } = this.props;
    const currentPage = Math.max(0, Math.min(page, this.totalPages));
    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords
    };

    this.setState({ currentPage }, () => onPageChanged(paginationData));
  }
  gotoPage = (page) => {
    if (page <= 1) {
      window.location.href = window.location.href.split('?')[0];
    } else {
      window.location.href = window.location.href.split('?')[0] + `?page=${page}`;
    }
  };

  handleClick = (page) => (evt) => {
    evt.preventDefault();
    this.gotoPage(page);
  };

  handleMoveLeft = (evt) => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage - this.pageNeighbours * 2 - 1);
  };

  handleMoveRight = (evt) => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage + this.pageNeighbours * 2 + 1);
  };
  fetchPageNumbers = () => {
    const currentPage = this.state.currentPage;
    const splitter = '...';
    /* Create full array of pages : [1,2,3,4,x] */
    const pages = Array(this.totalPages)
      .fill()
      .map((x, i) => i + 1);
    /* On first and latest page extend neighbors */
    const neighbors = currentPage == 1 || currentPage == pages.length ? 2 : 1;
    const finalPages = pages.reduce((arr, item) => {
      if (
        item === 1 /* First always there */ ||
        (item == 2 &&
          item + 1 >= currentPage - neighbors &&
          item + 1 <=
            currentPage + neighbors) /* Prevent start solitary ellipsis : [1,'...',3,4,5,6] */ ||
        (item >= currentPage - neighbors &&
          item <= currentPage + neighbors) /* Intermediate pages */ ||
        (item == pages.length - 1 &&
          item - 1 >= currentPage - neighbors &&
          item - 1 <=
            currentPage + neighbors) /* Prevent end solitary ellipsis : [1,2,3,4,'...',6] */ ||
        item === pages.length /* Latest always there */
      )
        arr.push(item);
      /* Add splitters */ else if (splitter !== arr[arr.length - 1]) arr.push(splitter);

      return arr;
    }, []);

    /* Add PREV / NEXT */
    finalPages.unshift(LEFT_PAGE);
    finalPages.push(RIGHT_PAGE);

    return finalPages;
  };

  render() {
    if (!this.totalRecords || this.totalPages === 1) return null;

    const { currentPage } = this.state;
    const pages = this.fetchPageNumbers();

    return (
      <Fragment>
        <nav aria-label="Article Pagination" className={styles.nav}>
          <ul className={styles.ul}>
            {this.props.isMobile ? (
              <>
                <li className="page-item">
                  <LinkButton
                    disabled={currentPage === 1}
                    noLink
                    className="page-link"
                    aria-label="Previous"
                    pagination
                    first
                    onClick={this.handleMoveLeft}>
                    <span className="sr-only">Précédent</span>
                  </LinkButton>
                </li>
                <li className={styles.total}>
                  Page {currentPage} sur {this.totalPages}
                </li>
                <li className="page-item">
                  <LinkButton
                    disabled={currentPage === this.totalPages}
                    noLink
                    className="page-link"
                    aria-label="Next"
                    pagination
                    last
                    onClick={this.handleMoveRight}>
                    <span className="sr-only">Suivant</span>
                  </LinkButton>
                </li>
              </>
            ) : (
              pages.map((page, index) => {
                if (page === LEFT_PAGE)
                  return (
                    <li key={index} className="page-item">
                      <LinkButton
                        disabled={currentPage === 1}
                        noLink
                        className="page-link"
                        aria-label="Previous"
                        pagination
                        first
                        onClick={this.handleMoveLeft}>
                        <span className="sr-only">Précédent</span>
                      </LinkButton>
                    </li>
                  );

                if (page === RIGHT_PAGE)
                  return (
                    <li key={index} className="page-item">
                      <LinkButton
                        disabled={currentPage === this.totalPages}
                        noLink
                        className="page-link"
                        aria-label="Next"
                        pagination
                        last
                        onClick={this.handleMoveRight}>
                        <span className="sr-only">Suivant</span>
                      </LinkButton>
                    </li>
                  );

                return (
                  <li key={index}>
                    <LinkButton
                      extraClasses={classnames(styles.button, {
                        [styles.active]: currentPage === page
                      })}
                      disabled={currentPage === page || page === '...'}
                      onClick={this.handleClick(page)}
                      pagination
                      noLink>
                      {page}
                    </LinkButton>
                  </li>
                );
              })
            )}
          </ul>
        </nav>
      </Fragment>
    );
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func
};

export default Pagination;
