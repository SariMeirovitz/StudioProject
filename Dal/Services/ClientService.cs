using Dal.Api;
using Dal.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.Services
{
    public class ClientService : IClient
    {
        private readonly DatabaseManager _databaseManager;
        public ClientService(DatabaseManager db)
        {
            _databaseManager = db;
        }
        public void Add(Client entity)
        {
            if (entity == null)
            {
                Console.WriteLine("item is empty");
                return;
            }
            _databaseManager.Clients.Add(entity);
            _databaseManager.SaveChanges();

        }

        public void Delete(int id)
        {
            var entity = _databaseManager.Clients.FirstOrDefault();
            //_databaseManager.Clients.Remove();
        }


        public IEnumerable<Client> GetAll()
        {
            return _databaseManager.Clients;
        }

        public Client GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(Client entity)
        {
            throw new NotImplementedException();
        }
    }
}