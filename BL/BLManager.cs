using BL.Api;
using BL.Services;
using Dal;
using Dal.Api;
using Dal.models;
using Dal.Services;
using Microsoft.Extensions.DependencyInjection;

namespace BL
{
    public class BLManager : IBL
    {
        public IBLClient Client { get; }
        public BLManager()
        {
            ServiceCollection services = new ServiceCollection();
            services.AddSingleton<IDal, DalManager>();
            services.AddSingleton<IBLClient, BLClientService>();
            ServiceProvider serviceProvider = services.BuildServiceProvider();
            Client = serviceProvider.GetService<IBLClient>();

        }
    }
}

