using BL;
using Dal;
using Dal.Api;
using BL.Api;
using BL.Services;

using Dal.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Dal.models;

public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddControllers();
        services.AddSingleton<IDal, DalManager>();
        services.AddSingleton<IBL, BLManager>();
        services.AddSingleton<IBLClient ,BLClientService>();
        services.AddSingleton< BLUserService>();
        services.AddSingleton<DatabaseManager>();
      
        // הוספת הגדרת CORS
        services.AddCors(options =>
        {
            options.AddPolicy("AllowSpecificOrigin",
                builder => builder.WithOrigins("http://localhost:5173") // החלף בכתובת המתאימה
                                  .AllowAnyMethod()
                                  .AllowAnyHeader());
        });
    }

    public void Configure(IApplicationBuilder app)
    {
        //app.UseHttpsRedirection();
        app.UseRouting();

        app.UseCors("AllowSpecificOrigin"); // הפעלת CORS

        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers(); // הוספת נקודות קצה
        });
    }
}
