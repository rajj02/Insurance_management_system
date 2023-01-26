namespace PolicyService.Model
{
    public class Policy
    {
        public int PolicyId { get; set; }
        public string PolicyName { get; set; }

       
        public int Amount { get; set; }
        public int Duration { get; set; }

        public int  PolicyCover { get; set; }
        public int AgeLimit { get; set; }

        public string Description { get; set; }

    }
}
