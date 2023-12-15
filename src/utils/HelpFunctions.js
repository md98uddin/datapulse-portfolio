export const filterServices = (filterKey, services) => {
  if (!filterKey || filterKey == 'Clear X') return services;


  let filter = services.filter((service) => service.type == filterKey);

  return filter;
};
