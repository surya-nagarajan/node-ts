CREATE TABLE IF NOT EXISTS campaigns (
    ad_id VARCHAR (256),
    campaign_id VARCHAR (256) PRIMARY KEY,
    campaign_name VARCHAR (256),
    campaign_description VARCHAR (256),
    campaign_category VARCHAR (256),
    product_name VARCHAR (256),
    approx_budget VARCHAR (256),
    campaign_end_date VARCHAR (256),
    campaign_status VARCHAR (256),
    campaign_createdAt VARCHAR (256),
    campaign_reject_reason VARCHAR (256),
    assigned_orders VARCHAR[] not null default '{}',
    assigned_influencers VARCHAR[] not null default '{}'
);
