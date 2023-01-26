using Consul;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ServicesConfiguration
    {
        public static IServiceCollection AddConsulConfig(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<IConsulClient, ConsulClient>
               (p => new ConsulClient(consulConfig =>
               {

                   consulConfig.Address = new Uri("http://localhost:8500");

               }));
            return services;

        }
        public static IApplicationBuilder UseConsul(this IApplicationBuilder app,
            IConfiguration configurationSetting)
        {
            var consulClient = app.ApplicationServices.GetRequiredService<IConsulClient>();
            var logger = app.ApplicationServices.GetRequiredService<ILoggerFactory>().CreateLogger("AppExtensions");
            var lifetime = app.ApplicationServices.GetRequiredService<IApplicationLifetime>();

            var registration = new AgentServiceRegistration()
            {
                ID = configurationSetting.GetValue<string>("Configuration:ServiceName"),
                Name = configurationSetting.GetValue<string>("Configuration:ServiceName"),
                Address = configurationSetting.GetValue<string>("Configuration:ServiceHost"),
                Port = configurationSetting.GetValue<int>("Configuraton:ServicePort")

                //ID = "students",
                //Name = "students",
                //Address = "localhost",
                //Port = 58491
            };
            logger.LogInformation("Registering with Consul");
            consulClient.Agent.ServiceDeregister(registration.ID).ConfigureAwait(true);
            consulClient.Agent.ServiceRegister(registration).ConfigureAwait(true);
            lifetime.ApplicationStopping.Register(() =>

            {
                logger.LogInformation("UnRegistreing from Consul");
            });
            return app;

        }
    }
}
