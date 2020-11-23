import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { LinkButton } from '../Links';
import styles from './Pagination.module.scss';
import router from 'next/router';
const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};
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
    const totalPages = this.totalPages;
    const currentPage = this.state.currentPage;
    const pageNeighbours = this.pageNeighbours;

    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = this.pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = range(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = 2;

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [...extraPages, ...pages];
          break;
        }

        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages];
          break;
        }

        default: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, '...'];
          break;
        }
      }

      return [LEFT_PAGE, 1, ...pages, totalPages, RIGHT_PAGE];
    }

    const rang = range(1, totalPages);

    return [LEFT_PAGE, ...rang, RIGHT_PAGE];
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
                    pagination
                    className="page-link"
                    aria-label="Previous"
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
                        pagination
                        className="page-link"
                        aria-label="Previous"
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
