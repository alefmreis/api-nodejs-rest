class Filter {
  build(query = {}) {    
    const filters = query;

    if (filters.limit) delete filters.limit;
    if (filters.page) delete filters.page;

    return filters;
  }


}

module.exports = new Filter();
