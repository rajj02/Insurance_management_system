using Microsoft.EntityFrameworkCore.Migrations;

namespace webApiUserService.Migrations
{
    public partial class upadatemodel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PremiumPrice",
                table: "UserServices",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PremiumPrice",
                table: "UserServices");
        }
    }
}
