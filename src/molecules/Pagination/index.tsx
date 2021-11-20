/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import { css, jsx } from '@emotion/react'
import { Button } from '../..'
import { grey } from '../../styles/colors'
import Global, { common } from '../../styles/global'
// eslint-disable-next-line no-unused-vars
import { commonProps } from '../../utils/commonProps'
import ChevronLeft from '../../atoms/Icons/chevronLeft'
import ChevronRight from '../../atoms/Icons/chevronRight'
import MenuIcon from '../../atoms/Icons/menu'

type PaginationProps = {
  pages: number
  currentPage: number
  siblingCount: number
  onChange: (newPage: number) => void
}

const Pagination = ({
  id,
  className,
  style,
  pages,
  currentPage,
  siblingCount,
  onChange
}: PaginationProps & commonProps) => {
  const styles = css`
    ${common}

    > ul {
      margin: 0px;
      padding: 0px;
      display: flex;

      li {
        list-style-type: none;
        margin: 6px 10px;

        > button {
          padding: 0px;
          font-size: 16px;
          line-height: 27px;
          width: 32px;
          height: 32px;

          &[data-color='white'] {
            color: ${grey[600]};
          }

          &[disabled] {
            background: ${grey[100]};

            :hover {
              border: 1px solid ${grey[100]};
              background: ${grey[400]};
            }
          }

          :hover {
            border: 1px solid ${grey[600]};
          }

          > span {
            display: inline-flex;
            align-items: center;
          }
        }
      }
    }
  `

  const renderedPages = fetchPageNumbers(pages, currentPage, siblingCount)

  const pageChange = (num: number) => {
    onChange && onChange(num)
  }

  return (
    <section css={styles} id={id} className={className} style={style}>
      <Global />
      <ul>
        <li>
          <Button
            color='white'
            disabled={currentPage === 1}
            onClick={() => pageChange(currentPage === 1 ? 1 : currentPage - 1)}
            rounded
          >
            <ChevronLeft />
          </Button>
        </li>
        {renderedPages.map((p, i) =>
          p > 0 ? (
            <li key={p + i + 'paginated-key'}>
              <Button
                color={currentPage === p ? 'primary' : 'white'}
                onClick={() => pageChange(p)}
                rounded
              >
                {p}
              </Button>
            </li>
          ) : (
            <li key={p + i + 'paginated-key'}>
              <Button
                color='white'
                onClick={() =>
                  p === -1
                    ? pageChange(renderedPages[i + 1] - 1)
                    : pageChange(renderedPages[i - 1] + 1)
                }
                rounded
                PreIcon={MenuIcon}
              />
            </li>
          )
        )}
        <li>
          <Button
            disabled={currentPage === pages}
            color='white'
            onClick={() =>
              pageChange(currentPage === pages ? pages : currentPage + 1)
            }
            rounded
          >
            <ChevronRight />
          </Button>
        </li>
      </ul>
    </section>
  )
}

export default Pagination

Pagination.defaultProps = {
  pages: 0,
  currentPage: 0,
  siblingCount: 3
}

const range = (start: number, end: number): number[] => {
  const length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

const fetchPageNumbers = (
  totalPages: number,
  currentPage: number,
  pageNeighbours: number
) => {
  /**
   * totalNumbers: the total page numbers to show on the control
   * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
   */
  const totalNumbers = pageNeighbours * 2 + 3
  const totalBlocks = totalNumbers + 2

  if (totalPages > totalBlocks) {
    const startPage = Math.max(2, currentPage - pageNeighbours)
    const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours)
    let pages = range(startPage, endPage)

    /**
     * hasLeftSpill: has hidden pages to the left
     * hasRightSpill: has hidden pages to the right
     * spillOffset: number of hidden pages either to the left or to the right
     */
    const hasLeftSpill = startPage > 2
    const hasRightSpill = totalPages - endPage > 1
    const spillOffset = totalNumbers - (pages.length + 1)

    switch (true) {
      // handle: (1) < {5 6} [7] {8 9} (10)
      case hasLeftSpill && !hasRightSpill: {
        const extraPages = range(startPage - spillOffset, startPage - 1)
        pages = [-1, ...extraPages, ...pages]
        break
      }

      // handle: (1) {2 3} [4] {5 6} > (10)
      case !hasLeftSpill && hasRightSpill: {
        const extraPages = range(endPage + 1, endPage + spillOffset)
        pages = [...pages, ...extraPages, -2]
        break
      }

      // handle: (1) < {4 5} [6] {7 8} > (10)
      case hasLeftSpill && hasRightSpill:
      default: {
        pages = [-1, ...pages, -2]
        break
      }
    }

    return [1, ...pages, totalPages]
  }

  return range(1, totalPages)
}
