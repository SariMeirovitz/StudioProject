using BL.Api;
using BL.Models;
using Dal.Api;
using Dal.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Services
{
    public class BLClientService : IBLClient
    {
        IClient _client;
        public BLClientService(IDal dal)
        {
            _client = dal.Client;

        }
        public IEnumerable<ClientForManager> GetAllForManager()
        {
            List<ClientForManager> clientList = new List<ClientForManager>();
            _client.GetAll().ToList()
                .ForEach(client => clientList.Add(new ClientForManager()
                { FirstName = client.FirstName, Age = client.Age, Email = client.Email, Id = client.Id, LastName = client.LastName, Phone = client.Phone }));
            return clientList;
        }

    }
}
