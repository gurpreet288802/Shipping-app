using System.ComponentModel.DataAnnotations;

namespace OrderAppDemo.Server.Models
{
    public class Order
    {
        public int Id { get; set; }

        public int orderNumber {  get; set; }

        [Required]
        public string CustomerName { get; set; }

        [Required]
        public string Product { get; set; }

        public DateTime OrderDate { get; set; } = DateTime.Now;
    }

}
