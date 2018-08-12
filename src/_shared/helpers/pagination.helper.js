class PaginationHelper {
  build(query = {}) {
    const page = parseInt(query.page, 10) || 1;
    const limit = parseInt(query.limit, 10) || 10;

    let skip = (page - 1) * limit;
    skip = skip < 0 ? 0 : skip;

    return {
      page,
      limit,
      skip
    };
  }

  resolve(meta, total) {
    let pages = parseInt(total / meta.limit, 10);

    if ((total % 2) > 0) {
      pages += 1;
    }

    if (pages === 0) pages = 1;

    return {
      currentPage: meta.page,
      itemsPerPage: meta.limit,
      totalPages: pages,
      totalItems: total
    };
  }

}

module.exports = new PaginationHelper();
