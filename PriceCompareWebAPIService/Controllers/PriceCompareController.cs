using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PriceCompareWebAPIService.Controllers
{
    public class PriceCompareController : ApiController
    {
        public IEnumerable<PRICECOMPARE> Get()
        {
            using (FareCompareEntities entities = new FareCompareEntities())
            {
                return entities.PRICECOMPARE.ToList();
            }
        }        
    }
}
