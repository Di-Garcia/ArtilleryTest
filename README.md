# Load test of Device-Deck

This folder contains all necessary scripts and data to perform a load test into Device-Deck. 

## Components:

The **device.yml** file is responsible to create 200 devices with ID range between 300 and 500. The information about IDs can be found in the **devices.csv** file. 

The **metadatasSampleNumber.yml** file is responsible to add a sample number for each of the 200 devices. The patterns is **SN<device_id>**.

The **groups.yml** file is responsible to create the Groups from **groups.csv** file.

The **bindGroups.yml** file is responsible to create random binds between Devices and Groups.

The **params.yml** file is responsible to create all params that are found in the **params.csv** file. 

The **bindParams.yml** file is responsible to create binds for each Device ID previously created with all params and with no *boundaries*. 

Finally the **sandMessage.yml** file is responsible to send messages to the **Message Management** endpoint *publisher*. 

## Scripts execution order:

Run the scripts in this order: 

 **device.yml**, **metadatasSampleNumber.yml**, **groups.yml**, **bindGroups.yml**, **params.yml**, **bindParams.yml** and then **sandMessage.yml**.

If you want to run again with a longer time, more virtual users or more requests per seconds. It is not necessary to run all files over again. 
The data of the devices, groups, params and binds are already registered in the database. So you can ajust lower number of devices by changing the **devices.csv** or changing the *phase* part on *config* part of the script seen below:

```
phases:
      - duration: 300
        arrivalRate: 20
        maxVusers: 50
```



